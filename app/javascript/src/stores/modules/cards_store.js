
const state = {
    selectedTemplateId: 2,
    userDetails: {
        firstname: "John",
        lastname: "Doe",
        backgroundColor: "#0099cc",
    }
};
const getters = {
    selectedTemplate(state) {
        return state.selectedTemplateId;
    },
    userDetails(state) {
        return state.userDetails;
    }
};
const mutations = {
    selectTemplate(state, templateId) {
        state.selectedTemplateId = templateId;
    },
    updateUserDetails(state, updatedInfo) {
        state.userDetails[updatedInfo.attribute] = updatedInfo.value;
    },
};

export default {
    state,
    getters,
    mutations
};