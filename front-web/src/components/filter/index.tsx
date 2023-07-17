import Select from 'react-select';
import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { FilterData, Store, StoreSelectOptions } from '../../types';
import { Controller, useForm } from 'react-hook-form';
import { BASE_URL } from '../../utils/resquests';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const { getValues, setValue } = useForm();

  const { control } = useForm();
  const [StoreSelectOptions, setStoreSelectOptions] = useState<StoreSelectOptions[]>([]);
  const [, setStore] = useState<Store>();

  const onChangeStore = (selectedOption: Store) => {
    setValue('store', selectedOption);
    const selectedStore = getValues('store');
    setStore(selectedStore);
    onFilterChange({
      store: {
        name: selectedStore ? selectedStore.label : '',
        id: selectedStore ? selectedStore.value : 0
      }
    });
  };

  // Request for possible select options
  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `${BASE_URL}/stores`
    };

    axios(params).then((response) => {
      type DataItem = {
        id: number;
        name: string;
      };

      const transformedData: { value: number; label: string }[] = response.data.map(
        (item: DataItem) => {
          return {
            value: item.id,
            label: item.name
          };
        }
      );
      setStoreSelectOptions(transformedData);
    });
  }, []);

  return (
    <div className="filter-container">
      <div className="filter-row">
        <div className="filter-search">
          <Controller
            control={control}
            name="store"
            render={({ field }) => (
              <Select
                classNamePrefix="filter-search-select"
                options={StoreSelectOptions}
                isClearable={true}
                placeholder="Selecione..."
                onChange={(selectedOption) => {
                  field.onChange(selectedOption);
                  onChangeStore(selectedOption);
                }}
                value={field.value}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
