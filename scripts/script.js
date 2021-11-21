$(function () {

  // $('body').removeClass('no-js');

  const exchangeRateBtn = $('.exchange-rate__btn');
  const exchangeRateUSD = $('.exchange-rate__USD');
  const exchangeRateEUR = $('.exchange-rate__EUR');

  const DATA_EXCHANGE = 'http://data.fixer.io/api/latest?access_key=03a1f76da9951e51235ac840b62fcd77';

  function onExchangeRateBtnClick() {
    $.get(
      DATA_EXCHANGE,
      function (response) {
        exchangeRateUSD.text((response.rates.RUB / response.rates.USD).toFixed(2));
        exchangeRateEUR.text((response.rates.RUB).toFixed(2));
      },
    );
  }

  exchangeRateBtn.on('click', onExchangeRateBtnClick);

});