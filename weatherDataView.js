class WeatherDataView {
  _data;
  _container = document.querySelector(".weatherContainer");

  render(data) {
    this._data=data;
    this._clearContainer()
    this._container.insertAdjacentHTML("afterbegin", this._generateMarkup(this._data));
  }

  _generateMarkup(data) {
    return `<div>
                    <p>
                      <span style='font-size: 1.8rem;'>${
                        this._data.name
                      }, </span>
                      <br>
                      <span style='font-size: 1.3rem;'> ${
                        this._data.countryName
                      }</span>
                    </p>
                    <img src='https://openweathermap.org/img/wn/${
                      this._data.icon
                    }@2x.png'>
                  </div>
                  <div class="weather-details">
                    <p>${this._data.description}</p>
                    <p style="font-size: 1.9rem">${Math.floor(
                      this._data.temp
                    )}°C</p>
                  </div>`;
  }

  _clearContainer(){
    this._container.innerHTML='';
  }

  
}

export default new WeatherDataView();
