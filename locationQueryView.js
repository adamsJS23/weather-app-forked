class LocationQueryView {
  _input = document.querySelector(".locationInput");
  _btn = document.querySelector(".weatherButton");
  
  getQuery(){
    const query = this._input.value;
    return query;
  }

  clearInput() {
    this._input.value = "";
  }

  addHandlerClick(handler) {
   this._btn.addEventListener("click", function (e) {
      e.preventDefault();
      handler()
    });
  }

  addHandlerEnter(handler){
    window.addEventListener('keypress', function (e){
      e.keyCode==13 && handler()
    })
  }
}

export default new LocationQueryView();
