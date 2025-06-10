import { useEffect } from 'react';
import { InputArea } from '@app/containers/floating/Settings/sections/wallet/styles';
import { invoke } from '@tauri-apps/api/core';
import { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CheckmarkIcon, ClearIcon, StyledForm, StyledInput, StyledInputWrapper } from './styles';
import { ClipboardViewer } from '../clipboardViewer/ClipboardViewer';
import { useTranslation } from 'react-i18next';

interface ExchangeAddressProps {
    handleIsAddressValid: (isValid: boolean) => void;
    handleAddressChanged: (address: string) => void;
}
export const ExchangeAddress = ({
    handleIsAddressValid,
    handleAddressChanged: handleAddressChange,
}: ExchangeAddressProps) => {
    const { t } = useTranslation('exchange');
    const {
        control,
        watch,
        reset,
        trigger,
        setValue,
        formState: { errors },
    } = useForm();
    const [showClipboard, setShowClipboard] = useState(false);
    const address = watch('address');
    useEffect(() => {
        trigger('address');
        handleAddressChange(address || '');
    }, [address, trigger, handleAddressChange]);
    const handlePaste = useCallback(
        (value: string) => {
            console.info('Pasted value:', value);
            setValue('address', value);
        },
        [setValue]
    );
    const validateAddress = useCallback(async (value: string) => {
        try {
            await invoke('verify_address_for_send', { address: value });
            return true;
        } catch (_) {
            return false;
        }
    }, []);

    const validationRules = {
        validate: async (value: string) => {
            const isValid = await validateAddress(value);
            handleIsAddressValid(isValid);
            return isValid || 'Invalid address format';
        },
    };

    const handleReset = useCallback(() => {
        reset({ address: '' });
    }, [reset]);

    const handleFocus = useCallback(() => {
        setShowClipboard(true);
    }, []);

    return (
        <div style={{ width: '100%' }}>
            <StyledForm onReset={handleReset}>
                <InputArea>
                    <Controller
                        name="address"
                        control={control}
                        rules={validationRules}
                        render={({ field }) => {
                            return (
                                <StyledInputWrapper>
                                    <StyledInput
                                        {...field}
                                        type="text"
                                        placeholder={t('wallet-address')}
                                        hasError={!!errors.address}
                                        onFocus={handleFocus}
                                    />
                                    {errors.address ? <ClearIcon onClick={handleReset} /> : <CheckmarkIcon />}
                                </StyledInputWrapper>
                            );
                        }}
                    />
                </InputArea>
            </StyledForm>
            {showClipboard && <ClipboardViewer handlePaste={handlePaste} />}
        </div>
    );
};
