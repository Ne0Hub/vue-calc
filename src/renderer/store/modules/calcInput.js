class Btn {
  constructor (obj) {
    this.key = obj.key
    this.label = obj.label
    this.icon = obj.icon
  }

  get dati () {
    return {
      key: this.key,
      label: this.label,
      icon: this.icon
    }
  }
}

const BTN_0 = new Btn({key: 'N0', label: 0})
const BTN_1 = new Btn({key: 'N1', label: 1})
const BTN_2 = new Btn({key: 'N2', label: 2})
const BTN_3 = new Btn({key: 'N3', label: 3})
const BTN_4 = new Btn({key: 'N4', label: 4})
const BTN_5 = new Btn({key: 'N5', label: 5})
const BTN_6 = new Btn({key: 'N6', label: 6})
const BTN_7 = new Btn({key: 'N7', label: 7})
const BTN_8 = new Btn({key: 'N8', label: 8})
const BTN_9 = new Btn({key: 'N9', label: 9})

const BTN_DIVIDE = new Btn({key: 'DIVIDE', label: '÷'})
const BTN_MOLT = new Btn({key: 'MOLT', label: 'X'})
const BTN_MINUS = new Btn({key: 'MINUS', label: '-'})
const BTN_PLUS = new Btn({key: 'PLUS', label: '+'})
const BTN_SIGN = new Btn({key: 'SIGN', label: '±'})
const BTN_POINT = new Btn({key: 'POINT', label: ','})
const BTN_RESULT = new Btn({key: 'RESULT', label: '='})

const BTN_OP_PERC = new Btn({key: 'OP_PERC', label: '%'})
const BTN_OP_SQUARE = new Btn({key: 'OP_SQUARE', label: '√'})
const BTN_OP_POT = new Btn({key: 'OP_POT', label: 'x²'})
const BTN_OP_1DIV = new Btn({key: 'OP_1DIV', label: '⅟x'})
const BTN_OP_CE = new Btn({key: 'OP_CE', label: 'CE'})
const BTN_OP_C = new Btn({key: 'OP_C', label: 'C'})
const BTN_OP_DEL = new Btn({key: 'OP_DEL', label: '<-', icon: 'mdi-numeric-9-box-outline'})

const BTN_ADV_COS = new Btn({key: 'OP_ADV_COS', label: 'COS'})
const BTN_ADV_SIN = new Btn({key: 'OP_ADV_SIN', label: 'SIN'})
const BTN_ADV_TAN = new Btn({key: 'OP_ADV_TAN', label: 'TAN'})
const BTN_ADV_COSH = new Btn({key: 'OP_ADV_COSH', label: 'COSH'})
const BTN_ADV_SINH = new Btn({key: 'OP_ADV_SINH', label: 'SINH'})
const BTN_ADV_TANH = new Btn({key: 'OP_ADV_TANH', label: 'TANH'})

const state = {
  calcStandard: [
    [BTN_OP_PERC, BTN_OP_SQUARE, BTN_OP_POT, BTN_OP_1DIV],
    [BTN_OP_CE, BTN_OP_C, BTN_OP_DEL, BTN_DIVIDE],
    [BTN_7, BTN_8, BTN_9, BTN_MOLT],
    [BTN_4, BTN_5, BTN_6, BTN_MINUS],
    [BTN_1, BTN_2, BTN_3, BTN_PLUS],
    [BTN_SIGN, BTN_0, BTN_POINT, BTN_RESULT]
  ],
  calcAdvanced: [
    [BTN_ADV_COS, BTN_ADV_SIN, BTN_ADV_TAN, BTN_ADV_COSH, BTN_ADV_SINH, BTN_ADV_TANH],
    [BTN_OP_PERC, BTN_OP_SQUARE, BTN_OP_POT, BTN_OP_1DIV, BTN_ADV_TANH],
    [BTN_OP_CE, BTN_OP_C, BTN_OP_DEL, BTN_DIVIDE],
    [BTN_7, BTN_8, BTN_9, BTN_MOLT],
    [BTN_4, BTN_5, BTN_6, BTN_MINUS],
    [BTN_1, BTN_2, BTN_3, BTN_PLUS],
    [BTN_SIGN, BTN_0, BTN_POINT, BTN_RESULT]
  ]
}

const getters = {
  listButtonsStandard (state) {
    return state.calcStandard
  },
  listButtonsAdvanced (state) {
    return state.calcAdvanced
  },
  listButtons: (state) => (typeCalc) => {
    const tipo = typeCalc.toLowerCase

    switch (tipo) {
      case 'standard':
        return state.calcStandard
      case 'scientifica':
        return state.calcStandard
      default:
        return state.calcStandard
    }
  }
}

export default {
  namespaced: true,
  state,
  getters
}
