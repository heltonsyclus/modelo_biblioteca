// file: /src/boot/register-my-component.js
import QsCardBase from '../component/QsCardBase.vue'
import QsCardLista from '../component/card-lista/QsCardLista.vue'
import QsCardGrupo from '../component/card-grupos/QsCardGrupo.vue'
// we globally register our component with Vue
export default ({ app }) => {
  app.component('qs-card', QsCardBase,QsCardLista,QsCardGrupo)
}
