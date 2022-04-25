<template>
  <div>
    <div v-for="(itemConteudo, i) in this.conteudo_card" :key="i">
      <div class="spin" style="width: 230px" v-if="carregarKnob">
        <q-knob
          v-model="value"
          size="30px"
          :thickness="0.4"
          color="primary"
          track-color="cyan-3"
        />
      </div>
      <div
        v-if="carregarText"
        style="
          margin: 0 auto;
          text-align: center;
          padding-top: 80px;
          color: gray;
        "
      >
        <span style="font-weight: 500">Não possui itens...</span>
      </div>
      <div
        class="flex justify-between items-center q-my-none hover"
        style="padding: 10px"
      >
        <a @click.prevent="abrirItem(i)" class="cursor" style="max-width: 100%">
          {{ itemConteudo }}
        </a>
        <q-icon name="more_vert" size="20px" />

        <!--<div class="flex justify-end items-center">

            <p
              v-if="
                mostrar_qtde === true ||
                mostrar_duracao === true ||
                mostrar_espera === true
              "
              class="text-blue-grey-7"
              style="font-size: 13px"
            >
              <q-icon name="av_timer" />

              {{
                this.formataCaptionItem(
                  itemConteudo.qtde,
                  itemConteudo.duracao,
                  itemConteudo.espera
                )
              }}
            </p>
            <div
              v-if="mostrar_imagem === true && itemConteudo.lista.length > 0"
              class="flex"
            >
              <q-btn
                v-if="itemConteudo.lista.length > 1"
                size="11px"
                unelevated
                round
                color="primary"
                style="margin-left: 10px"
                @click="mostrarColaboradores(i)"
              >
                <div
                  v-if="
                    itemConteudo.listaExpandida === false ||
                    itemConteudo.listaExpandida === undefined
                  "
                >
                  +
                </div>
                <div v-else>-</div>
                {{ itemConteudo.lista.length - 1 }}
              </q-btn>
              <div v-for="(itemLista, j) in itemConteudo.lista" :key="j">
                <div
                  class="flex"
                  v-if="j === 0 || itemConteudo.listaExpandida === true"
                >
                  <q-avatar size="32px" style="margin-left: 8px">
                    <img :src="this.getColaborador(itemLista).img" />
                  </q-avatar>
                  <q-tooltip class="capitalize">
                    {{ this.getColaborador(itemLista).usuario }}
                  </q-tooltip>
                </div>
              </div>
            </div>
          </div>-->
      </div>
      <div style="width: 95%; margin-left: 15px">
        <q-separator />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sub_tipo", "conteudo_card"],
  methods: {},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.margin-bot {
  margin-bottom: 3px;
}
.pl {
  padding-left: 5px;
}
.hover:hover {
  background-color: rgb(205, 205, 205);
}
.cursor {
  cursor: pointer;
  color: rgb(19, 100, 175);
  font-weight: 500;
}

.text-class {
  font-weight: 400;
  font-style: italic;
  padding-left: 15px;
  width: 90%;
  cursor: pointer;
}
.text-class:hover {
  color: rgb(11, 187, 218);
  transition: 0.5s;
}
.spin {
  text-align: center;
  margin: 30px auto;
  animation: spins 1s infinite;
}
@keyframes spins {
  to {
    transform: rotate(360deg);
  }
}
@media only screen and (max-width: 1320px) {
  .my-card-syclus {
    width: 350px;
  }
}
/*@media only screen and (max-width: 500px) {
  .my-card-syclus {
    min-height: 200px;
  }
}*/
</style>
