export type DoctorT = {
    fullName: string,
    avatar: string,
    education: string,
    experience: string,
    coNumber: number,
    rating: number,
    about: string,
    dutyHours: DutyHoursT[],
    field: string,
    experienceList: string[],
    id?: number
}

type DutyHoursT = {
    day: string
    hour: string
}