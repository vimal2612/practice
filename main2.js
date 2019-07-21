const axios = require("axios");
const parseString = require("xml2js").parseString;
const geolib = require("geolib");
const moment = require("moment");
let getdata = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://dl.dropboxusercontent.com/s/8nvqnasci6l76nz/Problem.gpx")
      .then(response => {
        parseString(response.data, function(err, result) {
          resolve(result.gpx.trk[0].trkseg[0].trkpt);
        }); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

let calcdist = (start, end) => {
  return new Promise(function(resolve, reject) {
    try {
      resolve(
        geolib.getDistance(
          { latitude: start.lat, longitude: start.lon },
          { latitude: end.lat, longitude: end.lon }
        )
      );
    } catch (e) {
      reject(e);
    }
  });
};

let totaldistance = res => {
  return new Promise(function(resolve, reject) {
    try {
      var d = [];
      for (let i = 0; i < res.length - 1; i++) {
        calcdist(res[i]["$"], res[i + 1]["$"])
          .then(resp => {
            let starttime = moment(new Date(res[i].time));
            let endtime = moment(new Date(res[i + 1].time));
            let duration = moment.duration(endtime.diff(starttime)).asSeconds();
            let speed = (resp < 0 ? -resp : resp) / duration;
            d.push({
              distance: resp < 0 ? -resp : resp,
              time: duration,
              speed: speed,
              ele: res[i].ele - res[i + 1].ele
            });
          })
          .catch(e => {
            reject(e);
          });
      }
      resolve(d);
    } catch (e) {
      reject(e);
    }
  });
};

getdata()
  .then(data => {
    return new Promise(function(resolve, reject) {
      totaldistance(data)
        .then(t => {
          resolve({ data: data, totaldistance: t });
        })
        .catch(e => reject(e));
    });
  })
  .then(d => {
    var f = d.totaldistance.reduce((a, b) => a + b.distance, 0);
    var speedarray = d.totaldistance.map(x => x.speed);
    var movingtime = d.totaldistance
      .filter(x => x.distance > 0)
      .reduce((a, b) => a + b.time, 0);
    var totaltime = d.totaldistance.reduce((a, b) => a + b.time, 0);
    console.log(`Total distance : ${f} meters`);
    console.log(`Max Speed : ${Math.max(...speedarray)} m/s`);
    console.log(
      `Average Speed : ${speedarray.reduce((a, b) => a + b, 0) /
        speedarray.length} m/s`
    );
    console.log(`Elevation Gained : ${d.totaldistance.reduce((a, b) => a + b.ele, 0)}`);
    console.log(`Moving Time : ${movingtime} seconds`);
    console.log(`Total Time Elapsed : ${totaltime} seconds`);
  });
