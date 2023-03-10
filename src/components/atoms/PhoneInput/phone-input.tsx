import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Dropdown } from '../Dropdown/dropdown';
import { Typography } from '../Typography/Typography';
import { Icon } from '../icon';
import countryCodesMap from './country-codes.json';

const countryCodes = Object.values(countryCodesMap);

export interface PhoneInputProps {
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  hint?: string;
  label?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
}

export const PhoneInputField: FC<PhoneInputProps> = ({
  label,
  placeholder = '(555) 000-0000',
  hint,
  error = '',
  value: valueProp,
  disabled = false,
  onChange,
  fullWidth = false,
}) => {
  const [internalValue, setInternalValue] = useState('');
  const [openCountryCodePanel, setOpenCountryCodePanel] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState<typeof countryCodesMap['US']>(
    countryCodesMap['US']
  );

  const value = valueProp ?? internalValue;
  const setValue = (v: string) => {
    if (valueProp === undefined) {
      setInternalValue(v);
    }
    onChange?.(v);
  };
  const helperText = error || hint;

  return (
    <div className="flex flex-col gap-1.5">
      <Typography size="sm" color="gray-700">
        {label}
      </Typography>
      <Dropdown fullWidth={fullWidth} open={openCountryCodePanel && !disabled}>
        <Dropdown.Button>
          <div
            className={clsx(
              'h-10 flex items-center rounded-lg border',
              error
                ? 'border-error-300 focus-within:ring-4 focus-within:ring-error-100'
                : 'border-gray-300 focus-within:ring-4 focus-within:ring-primary-100',
              disabled ? 'bg-gray-50 pointer-events-none hover:cursor-not-allowed' : 'bg-white',
              fullWidth ? 'w-full' : 'w-80'
            )}>
            <div
              className={`pl-3 pr-2.5 py-2 flex items-center gap-2 cursor-pointer rounded-l-lg`}
              onClick={() => setOpenCountryCodePanel((prev) => !prev)}>
              <Typography color={disabled ? 'gray-500' : 'gray-900'}>
                {selectedCountryCode.iso2}
              </Typography>
              <Icon
                name={openCountryCodePanel ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="gray-500"
              />
            </div>
            <div className={`h-10 grow shrink pr-3 py-2 flex items-center gap-2`}>
              <Typography
                color={value && !disabled ? 'gray-900' : 'gray-500'}
                className="whitespace-nowrap">
                {`+ ${selectedCountryCode.code}`}
              </Typography>
              <div className="grow shrink">
                <input
                  className={clsx(
                    'w-full text-t-md text-inter placeholder:text-gray-500 border-0 outline-0 focus-visible:outline-0',

                    disabled ? 'text-gray-500 bg-gray-50' : 'text-gray-900 bg-white'
                  )}
                  placeholder={placeholder}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              {helperText && (
                <Icon
                  name={error ? 'alert-circle' : 'help-circle'}
                  size={16}
                  color={error ? 'error-500' : 'gray-400'}
                />
              )}
            </div>
          </div>
        </Dropdown.Button>
        <Dropdown.Panel>
          <div
            className={clsx(
              'h-80 overflow-auto my-1 bg-white border border-gray-100 shadow-lg rounded-lg',
              fullWidth ? 'w-full' : 'w-80'
            )}>
            {countryCodes.map(({ code, iso2, name }, index) => {
              return (
                <div
                  key={index}
                  className="px-3 py-2 flex items-center hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    setSelectedCountryCode({
                      code,
                      iso2,
                      name,
                    });
                    setOpenCountryCodePanel(false);
                  }}>
                  <div className="grow">
                    <Typography size="sm" color="gray-900">
                      {`${iso2} - ${name} +${code}`}
                    </Typography>
                  </div>
                  {selectedCountryCode.iso2 === iso2 && (
                    <Icon name="check" color="primary-600" size={20} />
                  )}
                </div>
              );
            })}
          </div>
        </Dropdown.Panel>
      </Dropdown>
      {helperText && (
        <Typography size="sm" color={error ? 'error-500' : 'gray-500'}>
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default PhoneInputField;
