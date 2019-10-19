<template>
  <div class="loading">
    <div style="width:100%;height:100%" class="lds-dual-ring">
      <div></div>
      <div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  background-color: rgba(51, 51, 51, 1);
}
.loading.show {
  opacity: 1;
  visibility: visible;
}
.loading .lds-dual-ring {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.3);
}
@keyframes lds-dual-ring {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes lds-dual-ring {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.lds-dual-ring {
  position: relative;
}

.lds-dual-ring div {
  box-sizing: border-box;
}

.lds-dual-ring > div {
  position: absolute;
  width: 180px;
  height: 180px;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  border: 20px solid #000;
  border-color: #d5757b transparent #d5757b transparent;
  -webkit-animation: lds-dual-ring 1s linear infinite;
  animation: lds-dual-ring 1s linear infinite;
}

.lds-dual-ring > div:nth-child(2) {
  border-color: transparent;
}

.lds-dual-ring > div:nth-child(2) div {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.lds-dual-ring > div:nth-child(2) div:before,
.lds-dual-ring > div:nth-child(2) div:after {
  content: '';
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  top: -20px;
  left: 60px;
  background: #d5757b;
  border-radius: 50%;
  box-shadow: 0 160px 0 0 #d5757b;
}

.lds-dual-ring > div:nth-child(2) div:after {
  left: -20px;
  top: 60px;
  box-shadow: 160px 0 0 0 #d5757b;
}

.lds-dual-ring {
  width: 200px !important;
  height: 200px !important;
  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
}
</style>
