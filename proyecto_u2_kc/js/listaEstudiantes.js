console.log(Vue)

let arreglo = []

const app = Vue.createApp({
  data() {
    return {
      arregloEstudiante: arreglo,
      nombres: null,
      apellidos: null,
      direccions: null
    }
  },
  methods: {
    agregarLista() {
      const estudiante = {
        nombre: this.nombres,
        apellido: this.apellidos,
        direccion: this.direccions
      }
      this.arregloEstudiante.unshift(estudiante)
      this.limpiar()
    },
    limpiar() {
      this.nombres = null
      this.apellidos = null
      this.direccions = null
    }
  }

})

app.mount('#myApp')
