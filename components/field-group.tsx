import { ReactNode } from "react";

type Props = {
  id: string; // id属性に使用
  label: string; // ラベル
  children: ReactNode; // 入力フィールドが入ります
  error?: string; // エラーテキスト
  currentlength?: number; // 現在の文字数
  action?: ReactNode; // アクションをつける場合
  maxLength?: number; // 最大文字数
  required?: boolean; // 必須入力か否か
};

const FieldGroup = ({
  error,
  label,
  currentlength,
  action,
  required,
  maxLength,
  children,
  id,
}: Props) => {
  return (
    <div>
      <div>
        <label htmlFor={id}>
          {label}
          {required && <sup className="text-red-500">*</sup>}
        </label>
      </div>
      <div className="flex space-x-2">
        {children}
        {action}
      </div>
      <div className="flex text-sm space-x-4">
        {error && <p className="text-red-500 flex-1">{error}</p>}
        {maxLength && (
          <p className="text-gray-500 ml-auto">
            {currentlength || 0} / {maxLength}
          </p>
        )}
      </div>
    </div>
  );
};

export default FieldGroup;
