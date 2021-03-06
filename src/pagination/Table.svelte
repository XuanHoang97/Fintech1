<script context="module">
    import Pagination, {
      setLabels as _setPaginationLabels
    } from "../pagination/Pagination.svelte";
    import Row from "../pagination/Row.svelte";
    import Sort, { setLabels as _setSortLabels } from "./Sort.svelte";
    export { Pagination, Row, Sort };
  
    let globalLabels;
  
    export function setTableLabels(labels) {
      globalLabels = labels;
    }
  
    export const setPaginationLabels = _setPaginationLabels;
    export const setSortLabels = _setSortLabels;
  </script>
  
  <script>
    import { createEventDispatcher, setContext } from "svelte";
    const dispatch = createEventDispatcher();
  
    export let loading = false;
    export let page = 0;
    export let pageIndex = 0;
    export let pageSize = 10;
    export let responsive = true;
    export let rows;
    export let serverSide = false;
    export let labels = {
      empty: "No records available",
      loading: "Loading data",
      ...globalLabels
    };
  
    let buttons = [-2, -1, 0, 1, 2];
    let pageCount = 0;
  
    $: filteredRows = rows;
    $: visibleRows = filteredRows.slice(pageIndex, pageIndex + pageSize);
  
    setContext("state", {
      getState: () => ({
        page,
        pageIndex,
        pageSize,
        rows,
        filteredRows
      }),
      setPage: (_page, _pageIndex) => {
        page = _page;
        pageIndex = _pageIndex;
      },
      setRows: _rows => (filteredRows = _rows)
    });
  
    function onPageChange(event) {
      dispatch("pageChange", event.detail);
    }
  
  </script>
  
  <style>
    .table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 30px;
    }
  
    .table :global(th, td) {
      position: relative;
    }
  
    .table :global(th, tr) {
        /* padding: 10px 0px ; */
    }

    .table tbody tr {
        display: flex;
        justify-content: space-between;
    }

    .table :global(td) {
      padding: 0px ;
    }
  
    .center {
      text-align: center;
      font-style: italic;
    }
  
    .center > span {
      padding: 10px 10px;
      float: left;
      width: 100%;
    }
  
    .slot-top,
    .slot-bottom {
      float: left;
      width: 100%;
      margin-top: 1em;
    }
  
    @media screen and (max-width: 576px) {
      table.responsive {
        border: 0;
      } 
   
      table.responsive :global(thead) {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      } 
  
      table.responsive :global(tr.content__admin) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: space-between;
        justify-items: flex-start;
      }

      table.responsive :global(tr.content__guarrant ) {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        align-items: center;
        justify-content: space-between;
        justify-items: flex-start;
      }
 
      table.responsive :global(td) {
        display: flex;
        flex-direction: column;
        font-size: 0.8em;
        text-align: right;
      }
  
      table.responsive :global(td::before) {
        /* content: attr(data-label); */
        float: left;
        font-weight: bold;
        text-align: left;
      }
  
      table.responsive :global(td[data-label-normal]::before) {
        font-weight: normal;
      }
   
      table.responsive :global(td[data-label-upper]::before) {
        text-transform: uppercase;
      }
  
      table.responsive :global(td:last-child) {
        border-bottom: 0;
      }
    }
  </style>
  
  
  <table class={'table ' + $$props.class} class:responsive>
    <slot name="head" />
    {#if loading}
      <tbody>
        <tr>
          <td class="center" colspan="100%">
            <span>
              {@html labels.loading}
            </span>
          </td>
        </tr>
      </tbody>
    {:else if visibleRows.length === 0}
      <tbody>
        <tr>
          <td class="center" colspan="100%">
            <span>
              {@html labels.empty}
            </span>
          </td>
        </tr>
      </tbody>
    {:else}
      <slot rows={visibleRows} />
    {/if}
    <slot name="foot" />
  </table>
  
  <slot name="bottom">
    <div class="slot-bottom">
      <svelte:component
        this={Pagination}
        {page}
        {pageSize}
        {serverSide}
        count={filteredRows.length - 1}
        on:pageChange={onPageChange} />
    </div>
  </slot>
  