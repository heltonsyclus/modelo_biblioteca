<template>
  <q-card flat bordered>
    <q-item
      style="background-color: #109cf1"
      dense="dense"
      :style="{ width: `${width}`, height: `${this.alturaCard}` }"
    >
      <q-item-section style="height: 40px; font-weight: 700; color: White">
        <div class="flex">
          {{ card }}
          <div v-if="totalizar_grupo === true">
            <span v-if="this.conteudo_card.length >= 1">
              ({{ this.conteudo_card.length }})
            </span>
          </div>
        </div>
      </q-item-section>
      <q-btn
        v-if="btn_comando === 'btn-itens'"
        round
        flat
        text-color="white"
        icon="more_vert"
      >
        <q-menu cover auto-close>
          <q-list>
            <q-item clickable>
              <q-item-section>Retirar</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Arrasta</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn
        v-if="btn_comando === 'btn-seta-baixa'"
        round
        flat
        text-color="grey-5"
        icon="expand_more"
        @click.prevent="btnSetaBaixa"
      >
      </q-btn>
      <q-btn
        v-if="btn_comando === 'btn-adicionar'"
        round
        flat
        text-color="white"
        icon="add"
        @click.prevent="btnAdicionar"
      >
      </q-btn>
      <q-btn
        v-if="btn_comando === 'btn-editar'"
        round
        flat
        text-color="white"
        icon="mode_edit"
        @click.prevent="btnEditar"
      >
      </q-btn>
      <div v-if="btn_comando === 'btn-filtro'">
        <q-select v-model="model" :options="modelos" dense="dense" />
      </div>
      <div v-if="btn_comando === 'btn-atualizar'">
        <q-btn
          round
          flat
          text-color="white"
          icon="autorenew"
          @click.prevent="$emit('atualizarConteudo')"
        >
        </q-btn>
      </div>
    </q-item>
    <q-card-section class="corpo" :style="{ height: `${height}` }">
      <QsCardLista
        v-if="tipo_card === 'card_lista'"
        :sub_tipo="sub_tipo"
        :conteudo_card="conteudo_card"
      />

      <QsCardGrupo
        v-if="tipo_card === 'card_grupo'"
        :sub_tipo="sub_tipo"
        :conteudo_card="conteudo_card"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";
import QsCardLista from "../component/card-lista/QsCardLista.vue";
import QsCardGrupo from "../component/card-grupos/QsCardGrupo.vue";
export default {
  emits: ["atualizarConteudo"],
  props: [
    "idPrincipal",
    "conteudo_card",
    "card",
    "tipo_card",
    "btn_comando",
    "formato_card",
    "sub_tipo",
    "msg",
    "link",
    "width",
    "height",
    "totalizar_grupo",
    "mostrar_qtde",
    "mostrar_duracao",
    "mostrar_espera",
    "mostrar_imagem",
    "total_tempo",
    "expandir_imagem",
    "conversor_tempo",
  ],
  components: {
    QsCardLista,
    QsCardGrupo,
  },
  setup() {
    return {
      model: ref("Hoje"),
      modelos: ["Hoje", "Semana", "Mês"],
      formato_padrao: "my-card-s",
      inputValores: [],
    };
  },
};
</script>

<style scoped>
.corpo {
  padding: 0;
  margin: 0px auto;
  overflow: auto;
}
</style>
