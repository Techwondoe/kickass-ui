import React from 'react';
import { Typography, Button, TypographyVariants } from '~/components/atoms';

export interface TableProps {
  buttonText: string;
  description: string;
  people: {
    email: string;
    name: string;
    role: string;
    title: string;
  }[];
  title: string;
  upperCaseTableHeader?: boolean;
}

export function Simple({
  title,
  description,
  buttonText,
  people,
  upperCaseTableHeader,
}: TableProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto space-y-2">
          <Typography variant={TypographyVariants.H1}>{title}</Typography>
          <Typography>{description}</Typography>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Button>{buttonText}</Button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {Object.keys(people[0]).map((key, index) => (
                      <th
                        key={index}
                        scope="col"
                        className={`text-left text-sm font-semibold text-gray-900 py-3.5 ${
                          index === 0 ? 'pl-4 pr-3 sm:pl-6' : 'px-3'
                        }`}>
                        {upperCaseTableHeader
                          ? key.toUpperCase()
                          : key.charAt(0).toUpperCase() + key.slice(1)}
                      </th>
                    ))}
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                          <span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
