import React, { FC, useRef } from 'react';
import { Icon } from '../icon';
import { Typography } from '../Typography/Typography';

export interface UploadProps {
  accept?: string;
  disabled?: boolean;
  onChange?: (fileList: FileList | null) => void;
}

export const Upload: FC<UploadProps> = ({ disabled = false, accept, onChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={`group px-6 py-4 gap-1 rounded-lg flex flex-col items-center cursor-pointer border border-gray-200 ${
        disabled ? `bg-gray-50` : `bg-white focus:bg-primary-25 focus:border-primary-300`
      }`}
      onClick={() => {
        fileInputRef.current?.click?.();
      }}>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        className="w-0 h-0"
        onChange={(e) => {
          onChange?.(e.target.files);
        }}
      />
      <div
        className={`w-10 h-10 mb-3 flex justify-center items-center rounded-full bg-gray-100 ${
          disabled ? `` : `group-focus:bg-primary-100`
        }`}>
        <Icon name="upload-cloud-02" color="gray-600" className="group-focus:stroke-primary-600" />
      </div>
      <div className="flex gap-1">
        <Typography size="sm" color={disabled ? 'gray-300' : 'primary-700'}>
          Click to upload
        </Typography>
        <Typography
          size="sm"
          color="gray-500"
          className={disabled ? '' : 'group-focus:text-primary-600'}>
          or drag and drop
        </Typography>
      </div>
      <Typography
        size="sm"
        color="gray-500"
        className={disabled ? '' : 'group-focus:text-primary-600'}>
        SVG, PNG, JPG or GIF (max. 800*400px)
      </Typography>
    </div>
  );
};

