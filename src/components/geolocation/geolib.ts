declare var geolib: any;
import * as x from 'geolib';

type geolibType = typeof geolib;
const theGeolib = (x as any).default as geolibType;

export { theGeolib as geolib };
