import { useState, useCallback } from 'react';

export const useForm = () => {
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleChange = useCallback(
        (name: string) => (value: string) => {
            setFormData(prev => ({ ...prev, [name]: value }));
        },
        [],
    );

    const register = useCallback(
        (name: string) => {
            return {
                value: formData[name] || '',
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(name)(e.target.value),
            };
        },
        [formData, handleChange],
    );

    const resetForm = useCallback(() => {
        setFormData({});
    }, []);

    return { register, formData, resetForm };
};
