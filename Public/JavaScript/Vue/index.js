const { createApp } = Vue;

createApp({
    data() {
        return {
            tabs: {
                modules: {
                    new: {
                        typing: "",
                        tempImg: "",
                        color: "",
                    }
                }
            }
        };
    },

    methods: {
        handlePageOpening(event, sectionId) {
            sectionOpener(event, sectionId); // Ref: Assignder/index
        },

        handleAppThemeChange() {
            switchAppTheme(); // Ref: Assignder/index
        },

        handleToggleButtons(event) {
            toggleButtonsHandler(event); // Ref: Assignder/index
        },

        handleNewAssignmentCreate() {
            createNewAssignment();
        },

        handleModuleNameInput() {
            this.tabs.modules.new.tempImg = generateImageFromName(this.tabs.modules.new.typing);
        },

        handlePageShift(event, direction) {
            const target = event.target.closest("div").getAttribute("data-paging");
            shiftPageTo(target, direction);
        }
    }
}).mount("#assignderApplication");
