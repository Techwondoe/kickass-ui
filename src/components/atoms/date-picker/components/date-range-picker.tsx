import React,{ FC } from "react";
import { isAfter, isSameDay } from "date-fns";
import { useController, useForm } from "react-hook-form";
import DatePickerInputRange from "./date-picker-input-range";
import { Calendar } from "../../calendar/calendar";
import useCalendarDate from "../../calendar/hooks/useCalendarDate";
import toDatePickerInput from "../utils/toDatePickerInput";
import {
    calendarRangeMap,
    CalendarRangeName,
} from "../../calendar/data/calendarRanges";
import { CalendarRange } from "../../calendar/hooks/useCalendarRange";
import { getCalendarRange } from "../../calendar/utils/getCalendarRange";
import toCalendarRange from "../utils/toCalendarRange";
import parseDatePickerInput from "../utils/parseDatePickerInput";
import {Button} from "../../Button/Button";
import CalendarHeader from "../../calendar/components/calendar-header";
import parseCalendarDate from "../../calendar/utils/parseCalendarDate";
import {Typography} from "../../Typography/Typography";
import isValidDatePickerInput from "../utils/isValidDatePickerInput";
import toCalendarDate from "../utils/toCalendarDate";
import formatCalendarDate from "../../calendar/utils/formatCalendarDate";
import { useCalendar } from "../../calendar/hooks/useCalendar";
import isValidCalendarDate from "../../calendar/utils/isValidCalendarDate";

export interface DateRangePickerProps {
    hideActions?: boolean;
    hidePresetRanges?: boolean;
    onCancel?: () => void;
    onApply?: (value: CalendarRange) => void;
    defaultValue?: CalendarRange;
}

export const DateRangePicker: FC<DateRangePickerProps> = ({
    hideActions = false,
    hidePresetRanges = false,
    onApply,
    onCancel,
    defaultValue,
}) => {
    const form = useForm({
        mode: "onChange",
        defaultValues: {
            rangeInput: {
                from: toDatePickerInput(
                    (defaultValue && defaultValue?.from) ?? ""
                ),
                to: toDatePickerInput((defaultValue && defaultValue?.to) ?? ""),
            },
        },
    });
    const rangeInput = useController({
        name: "rangeInput",
        control: form.control,
        rules: {
            validate: value => {
                if (!value.from) {
                    return "From date is required";
                } else if (!value.to) {
                    return "To date is required.";
                } else if (!isValidDatePickerInput(value.from)) {
                    return "Invalid from date format";
                } else if (!isValidDatePickerInput(value.to)) {
                    return "Invalid to date format";
                } else if (
                    isAfter(
                        parseDatePickerInput(value.from),
                        parseDatePickerInput(value.to)
                    )
                ) {
                    return "From date should be on or before to date";
                }
            },
        },
    });
    const formErrors = form.formState.errors;
    const errorMessage = formErrors.rangeInput?.message;
    const value: CalendarRange = toCalendarRange({
        from: rangeInput.field.value.from,
        to: rangeInput.field.value.to,
    });
    const fromCalendarHeaderDate = useCalendarDate({
        defaultValue:
            defaultValue?.from && isValidCalendarDate(defaultValue.from)
                ? defaultValue.from
                : formatCalendarDate(new Date()),
    });
    const toCalendarHeaderDate = useCalendarDate({
        defaultValue:
            defaultValue?.to && isValidCalendarDate(defaultValue.to)
                ? defaultValue.to
                : formatCalendarDate(new Date()),
    });
    const calendar = useCalendar({
        value,
        defaultValue,
        selectionType: "range",
        onChange: val => {
            const refinedVal =
                typeof val === "string"
                    ? val
                        ? { from: val, to: val }
                        : { from: "", to: "" }
                    : val;
            rangeInput.field.onChange({
                from: toDatePickerInput(refinedVal.from),
                to: toDatePickerInput(refinedVal.to),
            });
            fromCalendarHeaderDate.setValue(refinedVal?.from ?? "");
            toCalendarHeaderDate.setValue(refinedVal?.to ?? "");
        },
    });

    const isRangeSelected = (a: CalendarRange) => {
        return (
            isSameDay(
                parseDatePickerInput(rangeInput.field.value.from),
                parseCalendarDate(a.from)
            ) &&
            isSameDay(
                parseDatePickerInput(rangeInput.field.value.to),
                parseCalendarDate(a.to)
            )
        );
    };
    const onFromInputChange = (value: string) => {
        if (isValidDatePickerInput(value)) {
            fromCalendarHeaderDate.setValue(toCalendarDate(value));
        }
        rangeInput.field.onChange({
            from: value,
            to: rangeInput.field.value.to,
        });
    };
    const onToInputChange = (value: string) => {
        if (isValidDatePickerInput(value)) {
            toCalendarHeaderDate.setValue(toCalendarDate(value));
        }
        rangeInput.field.onChange({
            from: rangeInput.field.value.from,
            to: value,
        });
    };
    const rangeNames: CalendarRangeName[] = [
        "today",
        "yesterday",
        "thisWeek",
        "lastWeek",
        "thisMonth",
        "lastMonth",
        "thisYear",
        "lastYear",
        "allTime",
    ];
    const mobileRangeNames: CalendarRangeName[] = [
        "lastWeek",
        "lastMonth",
        "lastYear",
    ];

    return (
        <>
            <div className="w-fit hidden sm:flex bg-white border border-gray-100 rounded-lg">
                {!hidePresetRanges && (
                    <div className={`w-48 px-4 py-3 border-r border-gray-200`}>
                        {rangeNames.map(id => {
                            const { title } = calendarRangeMap[id];
                            const rangeValue = getCalendarRange(id);
                            const isSelected = isRangeSelected(rangeValue);
                            return (
                                <div
                                    key={id}
                                    className={`px-4 py-2.5 rounded-md ${
                                        isSelected ? "bg-gray-50" : ""
                                    } cursor-pointer`}
                                    onClick={() =>
                                        calendar.setValue(rangeValue)
                                    }
                                >
                                    <Typography
                                        size="sm"
                                        color={
                                            isSelected ? "gray-800" : "gray-700"
                                        }
                                    >
                                        {title}
                                    </Typography>
                                </div>
                            );
                        })}
                    </div>
                )}
                <div className="grow">
                    <div className="flex">
                        <div className="w-[328px] px-6 py-5 border-r border-gray-200">
                            <CalendarHeader
                                {...fromCalendarHeaderDate.control}
                            />
                            <Calendar
                                {...calendar.control}
                                month={
                                    fromCalendarHeaderDate.date
                                        ? fromCalendarHeaderDate.date.getMonth() +
                                          1
                                        : undefined
                                }
                                year={fromCalendarHeaderDate.date?.getFullYear()}
                            />
                        </div>
                        <div className="w-[328px] px-6 py-5">
                            <CalendarHeader {...toCalendarHeaderDate.control} />
                            <Calendar
                                {...calendar.control}
                                month={
                                    toCalendarHeaderDate.date
                                        ? toCalendarHeaderDate.date.getMonth() +
                                          1
                                        : undefined
                                }
                                year={toCalendarHeaderDate.date?.getFullYear()}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between px-5 py-4 border-t border-gray-200">
                        <DatePickerInputRange
                            fromInputProps={{
                                hasError: !!errorMessage,
                                value: rangeInput.field.value.from,
                                onChange: onFromInputChange,
                            }}
                            toInputProps={{
                                hasError: !!errorMessage,
                                value: rangeInput.field.value.to,
                                onChange: onToInputChange,
                            }}
                            error={errorMessage}
                        />
                        {!hideActions && (
                            <div className="flex gap-3 items-start">
                                <Button
                                    label="Cancel"
                                    variant="outlined"
                                    color="gray"
                                    size="lg"
                                    onClick={() => onCancel?.()}
                                />
                                <Button
                                    label="Apply"
                                    color="primary"
                                    disabled={!form.formState.isValid}
                                    size="lg"
                                    onClick={() =>
                                        onApply?.(
                                            toCalendarRange(
                                                rangeInput.field.value
                                            )
                                        )
                                    }
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-fit sm:hidden bg-white border border-gray-100 rounded-lg">
                <div className="w-[328px] flex flex-col gap-3 px-6 py-5">
                    <CalendarHeader {...fromCalendarHeaderDate.control} />
                    <DatePickerInputRange
                        fromInputProps={{
                            hasError: !!errorMessage,
                            value: rangeInput.field.value.from,
                            onChange: onFromInputChange,
                        }}
                        toInputProps={{
                            hasError: !!errorMessage,
                            value: rangeInput.field.value.to,
                            onChange: onToInputChange,
                        }}
                        error={errorMessage}
                    />
                    {!hidePresetRanges && (
                        <div className="flex justify-between items-center gap-3">
                            {mobileRangeNames.map(id => {
                                const { title } = calendarRangeMap[id];
                                const range = getCalendarRange(id);

                                return (
                                    <Button
                                        className="flex-1"
                                        label={title}
                                        key={id}
                                        onClick={() => calendar.setValue(range)}
                                        variant="text"
                                        color="primary"
                                        selected={isRangeSelected(range)}
                                    />
                                );
                            })}
                        </div>
                    )}
                    <Calendar
                        {...calendar.control}
                        month={
                            fromCalendarHeaderDate.date
                                ? fromCalendarHeaderDate.date.getMonth() + 1
                                : undefined
                        }
                        year={fromCalendarHeaderDate.date?.getFullYear()}
                    />
                </div>
                {!hideActions && (
                    <div className="flex flex-wrap items-center gap-3 px-5 py-4 border-t border-gray-200">
                        <Button
                            label="Cancel"
                            variant="outlined"
                            color="gray"
                            size="lg"
                            className="flex-1"
                            onClick={() => onCancel?.()}
                        />
                        <Button
                            label="Apply"
                            color="primary"
                            disabled={!form.formState.isValid}
                            size="lg"
                            className="flex-1"
                            onClick={() =>
                                onApply?.(
                                    toCalendarRange(rangeInput.field.value)
                                )
                            }
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default DateRangePicker;
