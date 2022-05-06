// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  volume = (4/3) * PI * Math.pow(radius, 3);
  return volume
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  volume = (PI * Math.pow(radius, 2) * height) / 3;
  return volume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  volume = width * height * depth;
  return volume
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let keys = Object.keys(solids);
  let totVolume = 0;
 
  for (i = 0; i < keys.length; i++) {
    if (solids[keys[i]].type === 'sphere') {
      totVolume += sphereVolume(solids[keys[i]].radius);
    }
    else if (solids[keys[i]].type === 'cone') {
      totVolume += coneVolume(solids[keys[i]].radius, solids[keys[i]].height);
    }
    else if (solids[keys[i]].type === 'prism') {
      totVolume += prismVolume(solids[keys[i]].height, solids[keys[i]].width, solids[keys[i]].depth);
    }
  }
  return totVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);