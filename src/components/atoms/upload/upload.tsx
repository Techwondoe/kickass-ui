import React, { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Icon } from '../icon';
import { Typography } from '../Typography/Typography';
import { UploadProps } from './upload.types';

export const Upload: FC<UploadProps> = ({
  maxFiles = 1,
  maxSize = 10000,
  minSize,
  disabled = false,
  acceptedValues = ['pdf', 'png'],
  onChange,
  onError,
  className=''
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const mimeTypes = {
    epub: 'application/epub+zip',
    js: 'application/javascript',
    json: 'application/json',
    doc: 'application/msword',
    pdf: 'application/pdf',
    xls: 'application/vnd.ms-excel',
    eot: 'application/vnd.ms-fontobject',
    ppt: 'application/vnd.ms-powerpoint',
    odp: 'application/vnd.oasis.opendocument.presentation',
    ods: 'application/vnd.oasis.opendocument.spreadsheet',
    odt: 'application/vnd.oasis.opendocument.text',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    csv: 'text/csv',
    html: 'text/html',
    txt: 'text/plain',
    xml: 'text/xml',
    mp3: 'audio/mpeg',
    ogg: 'audio/ogg',
    wav: 'audio/wav',
    gif: 'image/gif',
    jpeg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    tiff: 'image/tiff',
    ico: 'image/vnd.microsoft.icon',
    webp: 'image/webp',
    mp4: 'video/mp4',
    ogv: 'video/ogg',
    webm: 'video/webm',
  };
  const accept: Record<string, string[]> = {};

  acceptedValues?.map((val) => {
    accept[mimeTypes[val]] = [`.${val}`];
  });

  const onDrop = useCallback((files: File[]) => {
    setFiles(files);
    onChange && onChange(files);
  }, []);

  const onDropRejected = (err: unknown) => {
    console.log(err);
    onError && onError(err);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles,
    accept,
    disabled,
    maxSize,
    minSize,
    onDropRejected,
  });
  return (
    <div
      className={`group px-6 py-4 gap-1 rounded-lg flex flex-col items-center cursor-pointer border border-gray-200 ${
        disabled ? `bg-gray-50` : `bg-white focus:bg-primary-25 focus:border-primary-300`
      } ${className}`}
      {...getRootProps()}>
      <input {...getInputProps()} className="w-0 h-0" />
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

      {files.length === 0 ? (
        <Typography
          size="sm"
          color="gray-500"
          className={disabled ? '' : 'group-focus:text-primary-600'}>
          {acceptedValues?.map((val, index) =>
            index === acceptedValues.length - 1 ? `${val.toUpperCase()} ` : `${val.toUpperCase()}, `
          )}{' '}
          {'('}
          {minSize ? minSize / 1000 : '0'} - {maxSize / 1000} mb{') '}
          only
        </Typography>
      ) : (
        <Typography
          size="sm"
          color="gray-500"
          className={disabled ? '' : 'group-focus:text-primary-600'}>
          {files[0].name}
        </Typography>
      )}
    </div>
  );
};
