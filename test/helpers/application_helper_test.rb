require 'test_helper'

class ApplicationHelperTest < ActionDispatch::IntegrationTest
  test "full title helper" do 
    assert_equal full_title, "MicroBlogger"
    assert_equal full_title("Help"), "Help | MicroBlogger"
  end
end
