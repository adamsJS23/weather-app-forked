class LocationQueryView {
  _input = document.querySelector(".locationInput");
  _btn = document.querySelector(".weatherButton");
  
  getQuery(){
    const query = this._input.value;
    this._clearInput()
    return query;
  }

  _clearInput() {
    this._input.value = "";
  }

  addHandlerQuery(handler) {
   this._btn.addEventListener("click", function (e) {
      e.preventDefault();
      handler()
    });
  }
}

export default new LocationQueryView();
