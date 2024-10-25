import parsed_data from './fams-data.json';

export type FamsDataType = typeof parsed_data.data[0];

export const famsData = parsed_data.data
