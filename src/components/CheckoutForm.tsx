import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { OrderDetails } from '../types';

const schema = z.object({
  name: z.string()
    .min(2, '姓名至少需要 2 個字')
    .max(50, '姓名不能超過 50 個字'),
  email: z.string()
    .email('請輸入有效的電子郵件地址'),
  phone: z.string()
    .regex(/^09\d{8}$/, '請輸入有效的手機號碼（格式：09xxxxxxxx）'),
  address: z.string()
    .min(8, '地址至少需要 8 個字')
    .max(100, '地址不能超過 100 個字'),
  note: z.string()
    .max(200, '備註不能超過 200 個字')
    .optional()
});

interface CheckoutFormProps {
  onSubmit: (details: OrderDetails) => void;
  onCancel: () => void;
}

export function CheckoutForm({ onSubmit, onCancel }: CheckoutFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<OrderDetails>({
    resolver: zodResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          姓名
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          電子郵件
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          電話
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          配送地址
        </label>
        <textarea
          id="address"
          {...register('address')}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.address && (
          <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="note" className="block text-sm font-medium text-gray-700">
          備註（選填）
        </label>
        <textarea
          id="note"
          {...register('note')}
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.note && (
          <p className="mt-1 text-sm text-red-600">{errors.note.message}</p>
        )}
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          確認訂購
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
        >
          返回購物車
        </button>
      </div>
    </form>
  );
}