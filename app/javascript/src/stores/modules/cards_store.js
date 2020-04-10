
const state = {
    selectedTemplateId: 2,
    userDetails: {}
};
const getters = {
    selectedTemplate(state) {
        return state.selectedTemplateId;
    }
};
const mutations = {
    selectTemplate(state, templateId) {
        state.selectedTemplateId = templateId;
    },
    updateUserDetails(userDetails) {
        state.userDetails = userDetails;
    },
};

export default {
    state,
    getters,
    mutations
};