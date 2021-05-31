<script context="module">
    let globalLabels;
  
    export function setLabels(labels) {
      globalLabels = labels;
    }
  </script>
  
  <script>
    import { createEventDispatcher, getContext } from "svelte";
    const dispatch = createEventDispatcher();
    const stateContext = getContext("state");
  
    export let buttons = [-2, -1, 0, 1, 2];
    export let count;
    export let page = 0;
    export let pageSize;
    export let serverSide = false;
  
    export let labels = {
      first: "<<",
      last: ">>",
      next: ">",
      previous: "<",
      ...globalLabels
    };
  
    $: pageCount = Math.floor(count / pageSize);
  
    function onChange(event, page) {
      const state = stateContext.getState();
      const detail = {
        originalEvent: event,
        page,
        pageIndex: serverSide ? 0 : page * state.pageSize,
        pageSize: state.pageSize
      };
      dispatch("pageChange", detail);
  
      if (detail.preventDefault !== true) {
        stateContext.setPage(detail.page, detail.pageIndex);
      }
    }
  </script>
  
  <style>
    .active {
        background: #2F9773;
      color: white;
    }
  
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin-top: 16px;
    }
  
    li {
      float: left;
    }
  
    button {
        background: #DFDFDF;
        border: 1px solid #ccc;
        padding: 5px 10px;
        cursor: pointer;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0px 3px;
        font-weight: 600;
    }
  </style>
  
  <ul>
    <li>
      <button disabled={page === 0} on:click={e => onChange(e, 0)}>
        {labels.first}
      </button>
    </li>
    <li>
      <button disabled={page === 0} on:click={e => onChange(e, page - 1)}>
        {labels.previous}
      </button>
    </li>
    {#each buttons as button}
      {#if page + button >= 0 && page + button <= pageCount}
        <li>
          <button
            class:active={page === page + button}
            on:click={e => onChange(e, page + button)}>
            {page + button + 1}
          </button>
        </li>
      {/if}
    {/each}
    <li>
      <button
        disabled={page > pageCount - 1}
        on:click={e => onChange(e, page + 1)}>
        {labels.next}
      </button>
    </li>
    <li>
      <button disabled={page >= pageCount} on:click={e => onChange(e, pageCount)}>
        {labels.last}
      </button>
    </li>
  </ul>
  