<template>

    <div class="menu">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
    </div>
    <div class="paineldados">
        <span class="text-lateral">
            <label class="input-label">SENHA</label>
            <label class="text-label">1</label>
        </span>
        <span class="text-lateral">
            <label class="input-label">RG PACIENTE</label>
            <label class="text-label">3731508</label>
        </span>
        <span class="text-lateral">
            <label class="input-label">MÉDICO</label>
            <label class="text-label">Felipe Stieltjes</label>
        </span>
        <span class="text-lateral">
            <label class="input-label">SALA</label>
            <label class="text-label">10</label>
        </span>
    </div>
</template>
<style scoped>
.paineldados {
    text-align: center;
    border: 10px solid #00152A; 
}

.text-lateral {
    padding: 15px;
    /*border-style: solid;*/
    border-color: #00152A;
}


.input-label {
    font-family: Arial, Helvetica, sans-serif;
    display: block;
    font-size: 25px;
    font-weight: bold;
}
.text-label {
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 44px;
    display: block;
    font-size: 40px;
    font-weight: bold;
}
</style>