import { format, valueToNumber } from './utils'

const MONTHLY_RATE = 0.0098
const MINIMUM_PROPERTY_PRICE = 500000
const MINIMIM_DOWN_PAYMENT_RATE = 10

// DOM ELEMENTS

const $propertyPriceInput = document.getElementById('property-price')
const $downPaymentInput = document.getElementById('down-payment')
const $downPaymentRateInput = document.getElementById('down-payment__range')
const $downPaymentRateLabel = document.getElementById('down-payment__rate')
const $loanTermInput = document.getElementById('loan-term__range')
const $loanTermLabel = document.getElementById('loan-term__chosen')
const $creditAmountLabel = document.getElementById('credit-amount')
const $monthlyPaymentLabel = document.getElementById('monthly-payment')
const $propertyPriceError = document.getElementById('property-price__error')
const $downPaymentError = document.getElementById('down-payment__error')
const $button = document.getElementById('button')

// EVENT LISTENERS REGISTRY

$propertyPriceInput.addEventListener('keyup', onInputPriceChange)
$downPaymentRateInput.addEventListener('input', onDownPaymentRateChange)
$downPaymentInput.addEventListener('keyup', onDownPaymentInputChange)
$loanTermInput.addEventListener('input', onLoanTermChange)
$button.addEventListener('click', onConfirm)

// GETTERS

function getPropertyPrice() {
  return valueToNumber($propertyPriceInput.value)
}

function getCreditAmount() {
  const propertyPrice = getPropertyPrice()
  const downPaymentValue = getDownPaymentAmount()

  return propertyPrice - downPaymentValue
}

function getDownPaymentAmount() {
  const propertyPrice = getPropertyPrice()
  const rate = valueToNumber($downPaymentRateInput.value) / 100

  return propertyPrice * rate
}

function getLoanTermInMonths() {
  return valueToNumber($loanTermInput.value) * 12
}

function getMonthlyPayment() {
  const creditAmount = getCreditAmount()
  const loanTermInMonths = getLoanTermInMonths()

  return (
    (creditAmount * MONTHLY_RATE) / (1 - Math.pow(1 + MONTHLY_RATE, -loanTermInMonths))
  )
}

// UI UPDATERS

function updateCreditAmount(amount) {
  const creditAmount = amount ? amount : getCreditAmount()
  $creditAmountLabel.textContent = `$${format(creditAmount)} MXN`
}

function updateDownPayment() {
  const downPayment = getDownPaymentAmount()
  $downPaymentInput.value = format(Math.floor(downPayment))
}

function updateDownPaymentRateLabel() {
  $downPaymentRateLabel.textContent = $downPaymentRateInput.value + '%'
}

function updateOnLoanTermChange() {
  $loanTermLabel.textContent = $loanTermInput.value + ' años'
}

function updatePropertyPriceInput() {
  const propertyPrice = getPropertyPrice()
  $propertyPriceInput.value = format(propertyPrice)
}

function updateMonthlyPayment() {
  const monthlyPayment = getMonthlyPayment()
  $monthlyPaymentLabel.textContent = `$${format(monthlyPayment)} MXN *`
}

function showPropertyPriceError() {
  $propertyPriceError.classList.remove('hidden')
}

function hidePropertyPriceError() {
  $propertyPriceError.classList.add('hidden')
}

function showDownPaymentError() {
  $downPaymentError.classList.remove('hidden')
}

function hideDownPaymentError() {
  $downPaymentError.classList.add('hidden')
}

// LISTENERS CALLBACKS

function onInputPriceChange(event) {
  const propertyPrice = valueToNumber(event.target.value)

  updatePropertyPriceInput()

  if (propertyPrice < MINIMUM_PROPERTY_PRICE) {
    showPropertyPriceError()
  } else {
    hidePropertyPriceError()
    updateDownPayment()
    updateCreditAmount()
    updateMonthlyPayment()
  }
}

function onDownPaymentRateChange() {
  updateDownPayment()
  updateCreditAmount()
  updateDownPaymentRateLabel()
  updateMonthlyPayment()
}

function onDownPaymentInputChange(event) {
  const downPayment = valueToNumber(event.target.value)
  $downPaymentInput.value = format(downPayment)

  const propertyPrice = getPropertyPrice()
  const downPaymentRate = (downPayment * 100) / propertyPrice

  if (downPaymentRate < MINIMIM_DOWN_PAYMENT_RATE) {
    showDownPaymentError()
  } else {
    $downPaymentRateInput.value = downPaymentRate
    updateDownPaymentRateLabel()
    hideDownPaymentError()
    updateCreditAmount(propertyPrice - downPayment)
  }
}

function onLoanTermChange() {
  updateOnLoanTermChange()
  updateMonthlyPayment()
}

function onConfirm() {
  const propertyPrice = getPropertyPrice()
  const downPayment = getDownPaymentAmount()
  const downPaymentRate = (downPayment * 100) / propertyPrice
  if (
    propertyPrice < MINIMUM_PROPERTY_PRICE ||
    downPaymentRate < MINIMIM_DOWN_PAYMENT_RATE
  ) {
    window.alert('Por favor ingresa valores que estén dentro de los parámetros válidos.')
    return
  }
  const query = new URLSearchParams({
    amount: getCreditAmount(),
    monthlyPayment: getMonthlyPayment(),
  })
  window.location.assign(`/confirmation.html?${query.toString()}`)
}
