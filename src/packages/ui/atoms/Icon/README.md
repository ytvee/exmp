# Icon Component

Универсальный компонент для отображения SVG иконок в ASI Design System.

## Использование

```tsx
import { Icon } from '@asi-create/design-system';

// Базовое использование
<Icon name="Settings" />

// С размером
<Icon name="Settings" size="lg" />

// С цветом
<Icon name="Settings" color="#ff0000" />

// Кликабельная иконка
<Icon name="Settings" onClick={() => console.log('clicked')} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | - | Название иконки (обязательно) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер иконки |
| `color` | `string` | - | Цвет иконки (CSS color) |
| `className` | `string` | - | Дополнительные CSS классы |
| `onClick` | `() => void` | - | Обработчик клика |
| `data-testid` | `string` | - | ID для тестирования |

## Доступные иконки

- `ArrowDropDown` - Стрелка вниз
- `ArrowRight` - Стрелка вправо
- `AttachFile` - Прикрепить файл
- `Bitbucket` - Bitbucket
- `Chat` - Чат
- `ChatFilled` - Чат (заполненный)
- `Cloud` - Облако
- `Dashboard` - Дашборд
- `DataBase` - База данных
- `DeployedCode` - Развернутый код
- `Draft` - Черновик
- `GithubIcon` - GitHub
- `GoogleIcon` - Google
- `Home` - Домой
- `Inbox` - Входящие
- `Loader` - Загрузчик
- `Memory` - Память
- `Menu` - Меню
- `MoreHoriz` - Больше (горизонтально)
- `MoreVert` - Больше (вертикально)
- `Person` - Человек
- `RadioButtonChecked` - Радиокнопка (выбрана)
- `Settings` - Настройки
- `SmartToy` - Умная игрушка
- `TextSnippet` - Текстовый фрагмент
- `ZoomIn` - Увеличить
- `ZoomOut` - Уменьшить

## Размеры

- `xs` - 12px
- `sm` - 16px
- `md` - 20px (по умолчанию)
- `lg` - 24px
- `xl` - 32px

## Примеры

### Все размеры
```tsx
<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
  <Icon name="Settings" size="xs" />
  <Icon name="Settings" size="sm" />
  <Icon name="Settings" size="md" />
  <Icon name="Settings" size="lg" />
  <Icon name="Settings" size="xl" />
</div>
```

### С цветами
```tsx
<div style={{ display: 'flex', gap: '16px' }}>
  <Icon name="Settings" color="#ff0000" />
  <Icon name="Settings" color="#00ff00" />
  <Icon name="Settings" color="#0000ff" />
</div>
```

### Кликабельные иконки
```tsx
<Icon 
  name="Settings" 
  onClick={() => alert('Settings clicked!')} 
/>
```

## CSS классы

Компонент использует CSS модули со следующими классами:

- `.asi-icon` - Базовый класс
- `.asi-icon--{size}` - Класс размера
- `.asi-icon--clickable` - Класс для кликабельных иконок

## Тестирование

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Icon } from './Icon';

test('renders icon with correct name', () => {
  render(<Icon name="Settings" />);
  expect(screen.getByTestId('icon-Settings')).toBeInTheDocument();
});

test('handles click events', () => {
  const handleClick = vi.fn();
  render(<Icon name="Settings" onClick={handleClick} />);
  fireEvent.click(screen.getByTestId('icon-Settings'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
``` 