import parsed_data from './fams-data.json';

export type FamsDataType = typeof parsed_data.data[0];

export type Majors = "Ilmu Komputer Reguler" | "Sistem Informasi" | "Ilmu Komputer KKI";

export const famsData = parsed_data.data
