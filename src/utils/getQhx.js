import { convinces } from './vietgeo';

function getQhx(convince) {
  return convinces.findIndex((convin) => convin === convince);
}

export default getQhx;