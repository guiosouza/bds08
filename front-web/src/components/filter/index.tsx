import Select from 'react-select';
import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { Store } from '../../types';
import { Controller, useForm } from 'react-hook-form';
import { BASE_URL } from '../../utils/resquests';

import './styles.css';

function Filter() {
  const [selectStore, setSelectStore] = useState<Store[]>([]);
  const { control } = useForm();

  const handleChange = (data: { value: number; label: string }) => {
    const params: AxiosRequestConfig = {
      url:
        data == null || undefined
          ? `${BASE_URL}/stores`
          : `${BASE_URL}/sales/summary?storeId=${data.value}`
    };
    axios(params)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      setSelectStore(transformedData);
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
                options={selectStore}
                isClearable={true}
                placeholder="Selecione..."
                onChange={(selectedOption) => {
                  field.onChange(selectedOption);
                  handleChange(selectedOption);
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
