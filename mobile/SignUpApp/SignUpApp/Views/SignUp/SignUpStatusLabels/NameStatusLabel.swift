//
//  NameStatusLabel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class NameStatusLabel: SignUpStatusLabel {
    
    enum status: String {
        case unavailable = "이름은 필수 입력 항목입니다."
        case available = "사용 가능합니다."
        
        func message() -> String {
            return self.rawValue
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    func configure() {
        text = "status message"
        textColor = .clear
        NotificationCenter.default.addObserver(self, selector: #selector(handleStatusChanged), name: SignUpViewModel.NameStatusDidChangeNotification, object: nil)
    }
    
    @objc private func handleStatusChanged(notification: Notification) {
        guard let isValid = notification.userInfo?["isValid"] as? Bool, let status = notification.userInfo?["status"] as? status else { return }
        updateStatus(isValid: isValid, message: status.message())
        if status == .available { textColor = .clear }
    }
    
    deinit {
        NotificationCenter.default.removeObserver(self, name: SignUpViewModel.NameStatusDidChangeNotification, object: nil)
    }
}
