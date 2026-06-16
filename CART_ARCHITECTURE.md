# Cart System Architecture

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    SHOPPING CARD COMPONENT                   │
│  (Product Display with Weight & Quantity Selection)           │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ handleAddToCart()
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                  CART CONTEXT (cartContext)                  │
│  ├── cartItems: Array                                         │
│  ├── addToCart(product, quantity, weight)                    │
│  ├── removeFromCart(id, weight)                              │
│  ├── updateQuantity(id, weight, qty)                         │
│  ├── getTotalPrice()                                          │
│  └── getTotalItems()                                          │
└──────────────────────┬──────────────────────────────────────┘
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
    ┌──────────────┐          ┌──────────────┐
    │   HEADER     │          │  CARTUI CTX  │
    │ Shows Price  │          │ Manages UI   │
    │ Cart Sidebar │          │ State        │
    └──────────────┘          └──────────────┘
          │
          │ Displays
          ▼
    ┌──────────────────────┐
    │   CART SIDEBAR       │
    │ ├─ Item List         │
    │ ├─ Quantity Controls │
    │ ├─ Total Price       │
    │ └─ Checkout Button   │
    └──────────────────────┘
```

## State Structure

```javascript
cartItems: [
  {
    id: 1,
    title: "Pegasus Eau De Parfum",
    brand: "Rihanna",
    image: "...",
    weight: "50ml",           // Selected weight
    price: 29.00,             // Price for this weight
    quantity: 2,              // User quantity
    originalPrice: 36.00
  },
  {
    id: 2,
    title: "Greenley Eau De Parfum",
    brand: "Rihanna",
    image: "...",
    weight: "75ml",
    price: 42.00,
    quantity: 1,
    originalPrice: 50.00
  }
]
```

## Component Integration

### Header Component
```
├── Displays: $ {getTotalPrice()}
├── Shows: Cart Item Count
└── Renders: Cart Sidebar with
    ├── Product List (map cartItems)
    ├── Quantity Controls (±)
    ├── Remove Buttons (🗑️)
    ├── Total Price
    └── Checkout Button
```

### Shopping Card Component  
```
├── Card View
│   └── "Add To Cart" button
│       └── calls: handleAddToCart(1)
│
└── Modal View (Quick View)
    ├── Weight Selector
    ├── Quantity Selector (1-∞)
    └── "Add To Cart" button
        └── calls: handleAddToCart(modalQuantity)
```

## User Flow

```
1. User browses products in HERO section
                ↓
2. User selects weight/size from dropdown
                ↓
3. User clicks "Add To Cart" button
                ↓
4. handleAddToCart() called with product & quantity
                ↓
5. addToCart() updates CartContext (cartItems array)
                ↓
6. Header re-renders with new total price ✅
                ↓
7. openCart() called - Cart sidebar appears
                ↓
8. User sees product in cart with notification
                ↓
9. User can:
   ├─ Adjust quantity (+/-)
   ├─ Remove item (🗑️)
   ├─ Add more products
   └─ Checkout
```

## Key Points

- **Cart is Global**: All components access same cart state
- **UI Follows Data**: Header price updates automatically when cart changes
- **Weight Matters**: Each weight variant is a separate cart item
- **Quantity Independent**: Selecting quantity in modal doesn't affect card view
- **Auto-Open**: Cart sidebar opens immediately after adding
- **Mobile Ready**: Full responsive cart sidebar

## Notifications

```
✅ Green (Success): Product added to cart
🔵 Blue: Added to compare
❤️ Red: Added to wishlist
```
