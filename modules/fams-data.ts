import parsed_data from './fams-data.json';
import parsed_brief_data from './brief-fams-data.json'

export type FamsDataType = typeof parsed_data.data[0];

export type BriefFamsDataType = typeof parsed_brief_data.data[0];

export type Majors = "Ilmu Komputer Reguler" | "Sistem Informasi" | "Ilmu Komputer KKI";

export type OptionalMajors = Majors | "";

export const famsCount = parsed_data.data.length;

export const famsData = parsed_data.data;

export const briefFamsData = parsed_brief_data.data;
