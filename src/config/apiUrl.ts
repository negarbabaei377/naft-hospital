const ApiUrl = {
    getAllDoctors: "/api/doctors",
    createDoctor: "/api/doctors",
    getDoctorsById: (id: string) => `/api/doctors/${id}`,
    deleteDoctorsById: (id: string) => `/api/doctors/${id}`
} as const

type ApiUrl = typeof ApiUrl
export default ApiUrl as ApiUrl