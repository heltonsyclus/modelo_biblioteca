<template>
  <q-list class="rounded-borders bg-grey-1 q-mb-md q-my-none margin-bot">
    <q-expansion-item
      dense-toggle
      expand-separator
      v-for="(grupos, indexGrupo) in this.conteudo_card"
      :key="indexGrupo"
      @before-show="showItem(indexGrupo)"
      :icon="adicionar_icone"
      :label="grupos.grupo"
      :caption-lines="1"
    >
      <q-card>
        <q-card-section
          v-for="(itens, indexItem) in this.conteudo_card[indexGrupo]"
          :key="indexItem"
        >
          <div class="text-light-blue-9 flex justify-between items-center">
            <a
              @click.prevent="abrirItem(indexGrupo, indexItem)"
              class="q-pt-md pl text-class"
              style="width: 251px"
            >
              <strong class="capitalize">{{ itens }}</strong>
            </a>
            <q-btn
              color="dark"
              round
              flat
              icon="more_vert"
              class="items-center"
            >
              <q-menu cover auto-close style="pading: 0px 5px">
                <q-list>
                  <q-item clickable>
                    <q-item-section
                      @click.prevent="abrirItem(indexGrupo, indexItem)"
                      >Abrir</q-item-section
                    >
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
          <div style="width: 95%; margin-left: 15px">
            <q-separator />
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
export default {
  props: ["sub_tipo", "conteudo_card"],
};
</script>

<style scoped>
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
.corpo {
  padding: 0;
  margin: 0px auto;
  overflow: auto;
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
/*@media only screen and (max-width: 500px) {
  .corpo {
    height: 200px;
  }
}*/
</style>
