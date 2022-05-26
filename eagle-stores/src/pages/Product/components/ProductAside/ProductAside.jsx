import { useState } from 'react';
import { useData } from '../../../../context';
import { ACTION_TYPE } from '../../../../utils/actionType';
import './ProductAside.css';

export const ProductAside = () => {
  const { state, dispatch } = useData();
  const [sidebar, setSidebar] = useState(false);

  const maxRange = state.products.reduce((acc, curr) => {
    if (Number(curr.price) > acc) return Number(curr.price);
    return acc;
  }, 0);

  const rating = [1, 2, 3, 4];
  const SortBy = {
    LowToHigh: 'Low-to-High',
    HighToLow: 'High-to-Low',
  };

  return (
    <>
      <aside className={sidebar ? 'mobile__filter_sidebar ' : 'filter'}>
        <div className='filter__head'>
          <h4>Filters</h4>
          <p
            className='clearFilterreturn'
            onClick={() => {
              dispatch({
                type: ACTION_TYPE.CLEAR_FILTER,
              });
            }}
          >
            Clear
          </p>
        </div>
        <div className='filter__price'>
          <h4 className='filter__heading'>Price</h4>
          <div className='filter__range'>
            <p>1000</p>
            <p>{Math.floor(maxRange / 2)}</p>
            <p>{maxRange}</p>
          </div>
          <input
            className='slider'
            value={state.filter.priceRange}
            type='range'
            min='1000'
            max={maxRange}
            onChange={(e) => {
              dispatch({
                type: ACTION_TYPE.FILTER_CHANGE,
                payload: {
                  filterType: 'priceRange',
                  filterValue: e.target.value,
                },
              });
            }}
          />
        </div>

        <div className='filter__category'>
          <h4 className='filter__heading'>Category</h4>
          <div className='filter__checkbox'>
            {Object.keys(state.filter.categories).map((item, key) => {
              return (
                <div key={key}>
                  <label className='filter__input'>
                    <input
                      checked={state.filter.categories[item]}
                      onChange={() => {
                        dispatch({
                          type: ACTION_TYPE.FILTER_CHANGE,
                          payload: {
                            filterType: 'categories',
                            filterValue: {
                              ...state.filter.categories,
                              [item]: !state.filter.categories[item],
                            },
                          },
                        });
                      }}
                      type='checkbox'
                    />
                    <span className='filter__desc'>{item}</span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className='filter__rating'>
          <h4 className='filter__heading'>Rating</h4>
          <div className='filter__checkbox'>
            {rating.map((num) => {
              return (
                <div key={num}>
                  <label className='filter__input'>
                    <input
                      checked={state.filter.rating === num ? true : false}
                      onChange={() => {
                        dispatch({
                          type: ACTION_TYPE.FILTER_CHANGE,
                          payload: {
                            filterType: 'rating',
                            filterValue: num,
                          },
                        });
                      }}
                      type='radio'
                    />
                    <span className='filter__desc'>{num} Star & above</span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className='filter__sort'>
          <h4 className='filter__heading'>Sort by</h4>
          <div className='filter__radio'>
            {Object.keys(SortBy).map((value, key) => {
              return (
                <label key={key} className='filter__input'>
                  <input
                    type='radio'
                    checked={state.filter.sortBy === value ? true : false}
                    onChange={() => {
                      dispatch({
                        type: ACTION_TYPE.FILTER_CHANGE,
                        payload: {
                          filterType: 'sortBy',
                          filterValue: value,
                        },
                      });
                    }}
                  />
                  <span className='filter__desc'>Price - {value}</span>
                </label>
              );
            })}
          </div>
        </div>
      </aside>
      <div className='mobile__filter'>
        {sidebar ? (
          <button
            onClick={() => setSidebar(!sidebar)}
            className='btn btn__default'
          >
            Apply
          </button>
        ) : (
          <button
            onClick={() => setSidebar(!sidebar)}
            className='btn btn__default'
          >
            Filter
          </button>
        )}
        {sidebar && (
          <button
            onClick={() => setSidebar(!sidebar)}
            className='btn btn__default'
          >
            Cancel
          </button>
        )}
      </div>
    </>
  );
};
