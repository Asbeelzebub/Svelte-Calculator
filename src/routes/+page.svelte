<script lang="ts">
  let currentInput = "";
  let result = "";

  async function submitHandler() {


    const request = await fetch("/api/calculate", {
      method: "POST",
      body: JSON.stringify({
        input: currentInput,
      }),
    });
    const data = await request.json();
    result = data.output;
  }

  function addToInput(value: string) {
    currentInput += value;
  }

  function clearInput() {
    currentInput = "";
    result = "";
  }
</script>

<main>
  <h1>Calculator App</h1>
  <div>
    <input type="text" bind:value={currentInput} readonly />
    <p class="result">{result}</p>

    <div class="button-container">
      <button on:click={() => addToInput("7")}>7</button>
      <button on:click={() => addToInput("8")}>8</button>
      <button on:click={() => addToInput("9")}>9</button>
      <button class="operator" on:click={() => addToInput("+")}>+</button>
    </div>

    <div class="button-container">
      <button on:click={() => addToInput("4")}>4</button>
      <button on:click={() => addToInput("5")}>5</button>
      <button on:click={() => addToInput("6")}>6</button>
      <button class="operator" on:click={() => addToInput("-")}>-</button>
    </div>

    <div class="button-container">
      <button on:click={() => addToInput("1")}>1</button>
      <button on:click={() => addToInput("2")}>2</button>
      <button on:click={() => addToInput("3")}>3</button>
      <button class="operator" on:click={() => addToInput("*")}>*</button>
    </div>

    <div class="button-container">
      <button on:click={() => addToInput("0")}>0</button>
      <button on:click={clearInput}>C</button>
      <button class="operator" on:click={() => addToInput("/")}>/</button>
    </div>

    <button class="equal" on:click={submitHandler}>=</button>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 300px;
    margin: 0 auto;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 20px;
    text-align: right;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
  }

  .button-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  button {
    font-size: 20px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: #333;
    color: white;
    margin: 1%;
  }

  button.operator {
    background-color: #e966a0;
    color: #333;
  }

  button.equal {
    font-size: 20px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: #279eff;
    color: white;
    width: 100%;
  }

  button:hover {
    opacity: 0.8;
  }

  .result {
    font-size: 24px;
    margin-top: 10px;
    background-color: #f0f0f0;
    padding: 5px;
    border-radius: 5px;
    height: 34px;
  }
</style>
