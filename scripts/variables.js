class Variables {
    constructor() {
        if (!Variables.instance) {
            this.errorMessagesList = document.querySelector(".alertas")
            this.errorMessageEx = document.querySelector(".alerta")
            Variables.instance = this;
        }
        return Variables.instance
    }
}
export default Variables