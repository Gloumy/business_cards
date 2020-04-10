const store = {
    state: {
        selectedTemplateId: 1,
        userDetails: {}
    },

    mutations: {
        selectTemplate(templateId) {
            state.selectedTemplateId = templateId;
        },
        updateUserDetails(userDetails) {
            state.userDetails = userDetails;
        },
    }
};

export default store;