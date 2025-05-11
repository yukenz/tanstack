import {createFileRoute, Outlet} from '@tanstack/react-router'

export const Route = createFileRoute('/portal')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <>
          <h1>Layout Routes</h1>
          <Outlet/>
      </>
  )
}
