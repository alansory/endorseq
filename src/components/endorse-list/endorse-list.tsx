import clsx from 'clsx';

export default function EndorseListFilter() {
  return (
    <>
      <input
        type="text"
        placeholder="🔍 Search influencer or endorse"
        className="flex-1 rounded-md bg-slate-200 px-3 dark:bg-dark-base lg:w-52 dark:lg:ring-1 dark:lg:ring-dark-light"
        // onInput={setKeyword}
        maxLength={11}
        // defaultValue={query.q}
      />

      <div className="group">
        <button
          type="button"
          className={clsx(
            'flex h-10 w-10 items-center justify-center rounded-md border text-2xl lg:hidden',
            'bg-emerald-50 dark:bg-transparent'
            // isFilteredByGenOrType && 'bg-emerald-50 dark:bg-transparent',
          )}
          title="Filter"
          aria-label="Filter"
        >
          ⚙️
        </button>
        <button
          type="button"
          className={clsx(
            'absolute top-2.5 hidden h-10 w-10 items-center justify-center rounded-md border border-slate-500 text-2xl shadow group-focus-within:flex lg:!hidden',
            'bg-emerald-50 dark:bg-transparent'
            // isFilteredByGenOrType && 'bg-emerald-50 dark:bg-transparent',
          )}
          // onClick={() => (document.activeElement as HTMLElement)?.blur()}
          title="Filter"
          aria-label="Filter"
        >
          ⚙️
        </button>
        <div
          className={clsx(
            'absolute top-1.5 right-2 m-px h-3 w-3 rounded-full bg-emerald-500 lg:hidden',
            // isFilteredByGenOrType ? 'block' : 'hidden',
          )}
        />

        <div className="absolute inset-x-0 -top-2.5 -z-10 mt-0.5 grid grid-cols-2 gap-2.5 border-b py-3 px-3.5 transition-all group-focus-within:top-14 group-focus-within:bg-slate-50/80 group-focus-within:backdrop-blur dark:group-focus-within:bg-dark-light/70 lg:relative lg:!inset-auto lg:z-auto lg:m-0 lg:flex lg:border-0 lg:!bg-transparent lg:p-0 lg:backdrop-blur-0">
          <select
            // value={filter.generationId}
            // onChange={({ target }) => {
            //   setFilter((prev) => ({ ...prev, generationId: Number(target.value) }));
            //   replace(getNewRoute({ gen: target.value }));
            // }}
            className="mx-px h-[38px] rounded-md border-x-[12px] border-white bg-white ring-1 ring-gray-200 dark:border-dark-base dark:bg-dark-base dark:ring-dark-light"
          >
            <option value="0">All Packages</option>
            {/* {data!.generations.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))} */}
          </select>
          <select
            // value={filter.typeId}
            // onChange={({ target }) => {
            //   setFilter((prev) => ({ ...prev, typeId: Number(target.value) }));
            //   replace(getNewRoute({ type: target.value }));
            // }}
            className="mx-px h-[38px] rounded-md border-x-[12px] border-white bg-white ring-1 ring-gray-200 dark:border-dark-base dark:bg-dark-base dark:ring-dark-light"
          >
            <option value="0">All types</option>
            {/* {data!.types.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))} */}
          </select>
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-[60px] border-b bg-white dark:bg-dark-light lg:hidden" />
      </div>
    </>
  )
}