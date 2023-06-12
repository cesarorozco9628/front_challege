// UTILITIES

export function valueToNumber(stringValue) {
  return stringValue === '' ? 0 : parseInt(stringValue.replace(/[^0-9]/g, ''))
}

export function format(value) {
  const formatOptions = {
    style: 'decimal',
    currency: 'MXN',
    groupingSeparator: ',',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }

  return value.toLocaleString('es-MX', formatOptions)
}
