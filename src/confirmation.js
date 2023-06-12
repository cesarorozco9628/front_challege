import { format } from './utils'

window.addEventListener('load', populatePage)

function populatePage() {
  const $confirmedCreditAmount = document.getElementById('report-credit-amount')
  const $confirmedMonthlyPayment = document.getElementById('report-monthly-payment')

  const query = new URLSearchParams(window.location.search)
  console.log(query.get('amount'))

  $confirmedCreditAmount.textContent = `$${format(parseInt(query.get('amount')))} MXN`
  $confirmedMonthlyPayment.textContent = `$${format(
    parseInt(query.get('monthlyPayment'))
  )} MXN`
}
