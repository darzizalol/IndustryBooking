# CeusBooking - Intelligent Calendar & Booking System

Created and inspired from a take-home assessment:
A modern, responsive booking calendar application built with React, TypeScript, and Tailwind CSS. Designed to serve both businesses and customers with a unified, role-gated interface.

## Live Demo URL
- https://industrybookingtemplate.netlify.app/
- Deployed with **Netlify**

## 🚀 Core Features

### 1. Core Calendar Shell
**Full-featured calendar interface with advanced interaction capabilities**

- **Multi-View Support**
  - 📅 **Month View**: Traditional calendar grid with event overview
  - 📊 **Week View**: Detailed weekly schedule with time slots
  - 📋 **Day View**: Hour-by-hour daily breakdown
  - 📝 **Agenda View**: List-based chronological view

- **Advanced Interactions**
  - 🖱️ **Drag & Drop**: Intuitive event rescheduling and moving
  - 📏 **Drag Select**: Multi-day/time slot selection 
  - ⚡ **Real-time Updates**: Live synchronization across all views
 
- **Design Philosophy**
  - FullCalendar is equipped with the complete feature set for the booking requirements
  - Active development ensuring long-term viability
  - Excellent React integration for seamless development

### 2. Template Engine
**Configurable booking system with industry-specific customization**

- **Industry Mapping**
  - 💇 **Salon**: Service booking with stylist selection
  - 🎓 **Education**: Tutoring sessions with subject specification

- **Dynamic Form Configuration**
  - 📋 **Field Mapping**: Industry → form fields → validation rules

### 3. Dual-Persona Views
**Role-gated interfaces for different user types**

#### Business Dashboard
- **Approval Management**
  - ✅ **Approve/Reject**: One-click booking approval system
  - 📅 **Reschedule**: Drag-and-drop rescheduling with conflict detection

#### Customer View
- **Self-Service Booking**
  - 🎯 **Quick Booking**: Streamlined booking process

## 🛠️ Technical Architecture

### Frontend Stack
- **React 18**: Modern component architecture
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first responsive design
- **FullCalendar**: Professional calendar component
- **React Hook Form**: Efficient form handling
- **Zustand**: Lightweight state management

### Key Libraries
- **@fullcalendar/react**: Calendar core functionality
- **@fullcalendar/daygrid**: Month view implementation
- **@fullcalendar/timegrid**: Week/Day view implementation
- **@fullcalendar/interaction**: Drag & drop capabilities
- **react-hook-form**: Form validation and handling
- **uuid**: Unique identifier generation

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Modern web browser

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/ceus-booking.git
cd ceus-booking

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run test suite
npm run lint         # Run ESLint

```

## 🧪 Testing & Quality Assurance

### Unit Testing
**Comprehensive test suite using Vitest and React Testing Library**

#### Test Structure
```
src/components/__test__/
├── CalendarPage.test.tsx    # Calendar page component tests
└── FormTemplate.test.tsx    # Booking form component tests
```

#### Test Coverage
- **Component Rendering**: Verify components render correctly
- **User Interactions**: Test button clicks, form submissions
- **State Management**: Validate component state changes
- **Routing**: Test navigation and routing behavior

#### Test Examples

**CalendarPage Component Tests:**
- ✅ Toggle between Customer and Business views
- ✅ Calendar component renders correctly
- ✅ Navigation functionality works

**FormTemplate Component Tests:**
- ✅ Form fields initialize properly
- ✅ All required buttons are present
- ✅ Booking type selection works
- ✅ Form validation elements exist

#### Running Tests
```bash
# Run all tests
npm test
```

### Continuous Integration (CI)
**Automated quality checks on every push and pull request**

#### CI Workflow (.github/workflows/ci-simple.yml)
The project uses GitHub Actions for automated testing and quality assurance:

**Triggers:**
- 🔄 **Push to main**: Runs on every commit to main branch
- 🔀 **Pull Requests**: Runs on every PR to main branch

**CI Pipeline Steps:**
1. **🔍 Code Checkout**: Clone repository with latest changes
2. **🟢 Node.js Setup**: Configure Node.js 20.x with npm caching
3. **📦 Dependency Installation**: Install all project dependencies
4. **🔍 Linting**: Run ESLint for code quality checks
5. **🧪 Testing**: Execute unit tests with Vitest
6. **🏗️ Build**: Create production build to verify compilation

### Code Quality

#### ESLint Configuration
- **TypeScript Support**: Full TypeScript linting
- **React Best Practices**: React-specific rules
- **Code Style**: Consistent formatting and style
- **Error Prevention**: Catch common mistakes early

#### Test Utilities
- **@testing-library/react**: React component testing
- **@testing-library/jest-dom**: Custom matchers
- **vitest**: Fast test runner
- **jsdom**: DOM environment for tests

#### Test Data Management
- **Mock Data**: Use consistent test data
- **Test IDs**: Use `data-testid` for reliable element selection
- **Cleanup**: Automatic cleanup between tests

#### Pull Request Requirements
- ✅ All tests must pass
- ✅ No linting errors
- ✅ Successful build
- ✅ Code review approval

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: 14+
- **Chrome Mobile**: 90+

## 🎯 Use Cases

### Small Businesses
- **Salons & Spas**: Appointment scheduling with service selection
- **Tutors**: Session scheduling with subject specification

## 🔧 Configuration

### Development Guidelines
- Follow TypeScript best practices
- Maintain responsive design principles
- Write comprehensive tests
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **FullCalendar**: Professional calendar component
- **Tailwind CSS**: Utility-first CSS framework
- **React Team**: Amazing frontend framework
- **Community**: Contributors and feedback
