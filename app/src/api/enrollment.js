export default enrollment => ({
    sendEnrollment(data) {
        return axios.post("/enrollments/registry", { data });
    },

    getEnrollments() {
        return axios.get("/enrollments");
    },
});
