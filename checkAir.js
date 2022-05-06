const checkAir = function (samples, threshold) {
  let countClean = 0;
  let countDirty = 0;
  for (let i = 0; i < samples.length; i++) {
      if (samples[i] === "clean") {
          countClean++;
      }
      else if (samples[i] === "dirty") {
          countDirty++;
      }
  }
  if ((countDirty / countClean) < threshold) {
      return "Clean";
  }
  else {
      return "Polluted";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))